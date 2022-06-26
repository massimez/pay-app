import { Button, TextInput, LoadingOverlay } from '@mantine/core';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import useStyles from './CardPayment.styles';
import { Check, CircleX } from 'tabler-icons-react';
import { showNotification } from '@mantine/notifications';

export default function CardPayment() {
  const [loading, setLoading] = useState(false);
  const { classes } = useStyles();

  const formSchema = z.object({
    CardNumber: z.string().length(16, 'Номер карты должен содержать 16 символов'),
    ExpDate: z.string().regex(/(0[1-9]|10|11|12)\/20[0-9]{2}$/, 'Некорректный формат даты'),
    Cvv: z.string().length(3, 'CVV должен содержать 3 цифр'),
    Amount: z.number().positive(),
  });
  type FormSchemaType = z.infer<typeof formSchema>;

  const toggleBackground = () => {
    const wrapperEl = document.getElementById('wrapperBackground');
    const opacity = wrapperEl?.style.getPropertyValue('--op') || 0;
    wrapperEl?.style.setProperty('--op', opacity > 0 ? '0' : '1');
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormSchemaType>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    setLoading(true);
    try {
      const res = await fetch('/api/paye', {
        body: JSON.stringify(data),
        headers: { 'content-type': 'application/json' },
        method: 'POST',
      });
      const resData = await res.json();
      showNotification({
        title: 'Success',
        message: `Payment was successful. Transaction-Id:${resData.objRes.id}`,
        color: 'green',
        icon: <Check />,
      });
      console.log(resData, 'res');
    } catch (error) {
      console.error(error);
      showNotification({
        title: 'Error',
        color: 'red',
        message: 'Error while processing payment',
        icon: <CircleX />,
      });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.paymentCard}>
        <LoadingOverlay
          visible={loading}
          loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }}
          overlayOpacity={0.3}
          overlayColor="#c5c5c5"
        />
        <TextInput
          label="Card number"
          classNames={{ label: classes.label }}
          required
          type="number"
          autoComplete="cc-number"
          {...register('CardNumber')}
          error={errors?.CardNumber && String(errors.CardNumber.message)}
        />
        <div className={classes.row}>
          <TextInput
            label="Expiration Date"
            className={classes.input}
            classNames={{ label: classes.label }}
            required
            placeholder="MM/YYYY"
            {...register('ExpDate')}
            autoComplete="cc-exp"
            error={errors?.ExpDate && String(errors.ExpDate.message)}
          />
          <TextInput
            label="CVV"
            className={classes.cvv}
            classNames={{ label: classes.label }}
            required
            type="number"
            {...register('Cvv')}
            autoComplete="cc-csc"
            error={errors?.Cvv && String(errors.Cvv.message)}
          />
        </div>
        <div className={classes.row}>
          <TextInput
            label="Amount"
            className={classes.input}
            classNames={{ label: classes.label }}
            required
            type="number"
            {...register('Amount', {
              valueAsNumber: true,
            })}
          />
          <div
            className={classes.wrapperBtn}
            onMouseEnter={toggleBackground}
            onMouseLeave={toggleBackground}
          >
            <Button
              type="submit"
              variant="gradient"
              gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
              disabled={!isValid}
              className={classes.btnPay}
            >
              Pay
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

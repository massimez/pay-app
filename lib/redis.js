import { Client, Entity, Schema, Repository } from 'redis-om';

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
    console.log('connected')
  }
}

class Payment extends Entity {}

const schema = new Schema(Payment,
  {
    CardNumber: { type: 'string' },
    ExpDate: { type: 'string' },
    Cvv: { type: 'string' },
    Amount: { type: 'number' },
  },
  { dataStructure: 'JSON' }
);
export async function createPayment(data) {
  await connect();
  const repo = client.fetchRepository(schema);

  const newPay = repo.createEntity(data);

  const id = await repo.save(newPay);
  return {id,Amount:data.Amount};
}

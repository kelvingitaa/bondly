import { json, redirect } from '@remix-run/node';
import { Form, useActionData, useLoaderData, useTransition } from '@remix-run/react';
import { Client, PrismaClient } from '@prisma/client';
import { getClient, getClients, createClient, updateClient, deleteClient } from '../models/client.server';


const prisma = new PrismaClient();

export async function loader() {
  const clients = await getClients();
  return json({ clients });
}

export async function action({ request, params }: any) {
  const formData = await request.formData();
  const action = formData.get('action');
  const clientId = params?.clientId;

  if (action === 'create') {
    const data = Object.fromEntries(formData.entries());
    await createClient(data);
    return redirect('/clients');
  }

  if (action === 'update' && clientId) {
    const data = Object.fromEntries(formData.entries());
    await updateClient(parseInt(clientId), data);
    return redirect('/clients');
  }

  if (action === 'delete' && clientId) {
    await deleteClient(parseInt(clientId));
    return redirect('/clients');
  }

  return json({ error: 'Invalid action' });
}


export default function ClientsRoute() {
  const data = useLoaderData();
  const actionData = useActionData();
  const transition = useTransition();

  return (
    <div>
      <h1>Clients</h1>
      {transition.state === 'submitting' && <p>Saving...</p>}
      {actionData?.error && <p style={{ color: 'red' }}>{actionData.error}</p>}
      <ul>
        {data.clients.map((client: Client) => (
          <li key={client.id}>
            <ClientItem client={client} />
          </li>
        ))}
      </ul>
      <CreateClientForm />
    </div>
  );
}

function ClientItem({ client }: { client: Client }) {
  const transition = useTransition();

  return (
    <div>
      <h2>{client.name}</h2>
      <p>{client.email}</p>
      <UpdateClientForm client={client} />
      {transition.state === 'submitting' && <p>Saving...</p>}
      <button onClick={async () => {
        const res = await fetch(`/clients/${client.id}`, {
          method: 'delete',
        });
        if (res.ok) {
          window.location.reload();
        }
      }}>Delete</button>
    </div>
  );
}

function CreateClientForm() {
  const actionData = useActionData();

  return (
    <Form method="post">
      <input type="hidden" name="action" value="create" />
      {actionData?.fieldErrors?.name && <p style={{ color: 'red' }}>{actionData.fieldErrors.name}</p>}
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br />
      {actionData?.fieldErrors?.email && <p style={{ color: 'red' }}>{actionData.fieldErrors.email}</p>}
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <button type="submit">Create Client</button>
    </Form>
  );
}

function UpdateClientForm({ client }: { client: Client }) {
  const actionData = useActionData();

  return (
    <Form method="post" action={`/clients/${client.id}`}>
      <input type="hidden" name="action" value="update" />
      {actionData?.fieldErrors?.name && <p style={{ color: 'red' }}>{actionData.fieldErrors.name}</p>}
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" defaultValue={client.name} />
      <br />
      {actionData?.fieldErrors?.email && <p style={{ color: 'red' }}>{actionData.fieldErrors.email}</p>}
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" defaultValue={client.email} />
      <br />
      <button type="submit">Update Client</button>
    </Form>
  );
}

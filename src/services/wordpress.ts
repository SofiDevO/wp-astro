const baseURL = import.meta.env.WORDPRESS_URL;

interface WPGraphQLParams {
  query: string;
  variables?: object;
}

export async function wpquery({ query, variables = {} }: WPGraphQLParams) {
  const res = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const { data, errors } = await res.json();

  if (errors) {
    console.error('GraphQL Errors:', errors);
    throw new Error('Error en la consulta GraphQL');
  }

  return data;

}

import useSWR from 'swr'

// const fetchCurrency = (currencyCode) =>
//   fetch(
//     `https://data.fixer.io/api/latest`
//   ).then((response) => response.json());

export default function Rates({ currencyCode }) {
  const data = [
    {
      base: 'CAD',
      rates: {
        CAD: 1,
      },
    },
    {
      base: 'USD',
      rates: {
        CAD: 2,
      },
    },
  ]

  // const { data, error } = useSWR(currencyCode, fetchCurrency);

  // if (error) return <div>No rates today</div>;
  // if (!data) return <div>Loading... wait patiently</div>;

  return (
    <div>
      <h2>Rates for {currencyCode}</h2>
      <ul>
        {/* {Object.entries(data.rates).map(([code, rate]) => (
          <li key={code}>
            <strong>{code}:</strong> {rate}
          </li>
        ))} */}
      </ul>
    </div>
  )
}

export async function getExchangeRate(base: string, target: string) {
    const res = await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${target}`)
    const data = await res.json()
    return data.rates[target]
  }
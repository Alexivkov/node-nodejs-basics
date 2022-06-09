export const parseEnv = () => {
  const allVariablesArray = Object.entries(process.env);
  const rssVariablesArray = allVariablesArray.reduce((acc, [key, value]) => {
    if (key.startsWith('RSS_')) acc.push(`${key}=${value}`);
    return acc;
  }, []);
  console.log(rssVariablesArray.join('; '))
};

parseEnv();
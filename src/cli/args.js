export const parseArgs = () => {
  const userInputArguments = process.argv.slice(2);
  
  const cliArguments = userInputArguments.reduce((acc, arg, index, arr) => {
    const valueCandidate = arr[index + 1];
    if (valueCandidate && arg.startsWith('--')){
      const transformArgs = arg.slice(2);
      const cliArgumentsTransformed = `${transformArgs} is ${valueCandidate}`;
      acc.push(cliArgumentsTransformed);
    } 
    return acc;
  }, []);

  console.log(cliArguments.join(', '));
};

parseArgs();
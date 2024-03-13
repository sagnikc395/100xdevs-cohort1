interface Config {
  readonly endPoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endPoint: "https://api.example.com",
  apiKey: "acdwe3123123131",
};

//now config cannot be updated outside.

type FlareConfig = {
  position: string;
  red?: boolean;
};

export default function flare(flares: FlareConfig[]) {
  const size = '60%';
  const gradients = flares.map((config) => {
    const { red } = config;
    const color = red ? "#F322A250" : "#4287FF50";
    return `radial-gradient(${color} 0%, transparent 60%)`;
  });

  return {
    backgroundImage: gradients.join(", "),
    backgroundPosition: flares.map((config) => config.position).join(", "),
    backgroundRepeat: "no-repeat",
    backgroundSize: flares.map(() => size + " " + size).join(", "),

  };
}

interface IProps {
  name: string;
  language: string;
  averageLifespan: string;
}

export function Species({ name, language, averageLifespan }: IProps) {
  return (
    <li>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {averageLifespan}</li>
      </ul>
    </li>
  );
}

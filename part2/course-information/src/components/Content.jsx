import { v4 as uuidv4 } from "uuid";
import Part from "./Part";
import Total from "./Total";
const Content = ({ parts }) => {
  return (
    <>
      <table>
        <tbody>
          {parts.map((part) => {
            return <Part part={part} key={uuidv4()} />;
          })}
        </tbody>
      </table>
      <Total parts={parts} />
    </>
  );
};

export default Content;

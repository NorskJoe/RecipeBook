import { MethodItem } from './Method.models';
import styles from './Method.module.scss';

interface MethodProps {
  steps: MethodItem[];
}

const Method = ({ steps: steps }: MethodProps) => {
  return (
    <div className="container text-start my-5">
      <h2 className="text-center">Method</h2>
      <ul className="list-group list-group-numbered list-group-flush my-4">
        {steps.map((step, index) => (
          <li
            className={`list-group-item fs-5 py-4 ${styles.listItem}`}
            key={index}
          >
            {step.instructions}
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default Method;

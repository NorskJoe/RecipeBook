import { FaMinus, FaPlus } from 'react-icons/fa6';

interface SummaryPanelProps {
  prepTime: string;
  cookTime: string;
  serves: number;
}

const SummaryPanel = ({ prepTime, cookTime, serves }: SummaryPanelProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">Prep {prepTime}</div>
        <div className="col-sm">Cook {cookTime}</div>
        <div className="col-sm">
          <FaMinus />
          Serves {serves}
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;

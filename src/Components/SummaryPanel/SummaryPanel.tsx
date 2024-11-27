import { FaMinus, FaPlus } from 'react-icons/fa6';

interface SummaryPanelProps {
  prepTime: string;
  cookTime: string;
  serves: number;
  handleServeSizeChange: (increase: boolean) => void;
}

const SummaryPanel = ({
  prepTime,
  cookTime,
  serves,
  handleServeSizeChange,
}: SummaryPanelProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">Prep {prepTime}</div>
        <div className="col-sm">Cook {cookTime}</div>
        <div className="col-sm">
          <FaMinus
            onClick={() => (serves > 1 ? handleServeSizeChange(false) : null)}
          />
          Serves {serves}
          <FaPlus onClick={() => handleServeSizeChange(true)} />
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;

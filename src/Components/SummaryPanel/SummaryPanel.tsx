interface SummaryPanelProps {
  prepTime: string;
  cookTime: string;
}

const SummaryPanel = ({ prepTime, cookTime }: SummaryPanelProps) => {
  return (
    <>
      <div>{prepTime}</div>
      <div>{cookTime}</div>
    </>
  );
};

export default SummaryPanel;

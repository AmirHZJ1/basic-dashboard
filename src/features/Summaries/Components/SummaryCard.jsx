const SummaryCard = ({ title, Icon, value, unit }) => {
  return (
    <article className="summary-card">
      <div className="summary-head">
        <span>{title}</span>
        <span className="summary-icon">
          <Icon />
        </span>
      </div>
      <div className="summary-value">
        <strong>{value}</strong>
        <span>{unit}</span>
      </div>
    </article>
  );
};

export default SummaryCard;
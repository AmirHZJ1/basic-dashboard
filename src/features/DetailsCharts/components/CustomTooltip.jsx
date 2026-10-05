const CustomTooltip =  ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white p-2 border rounded shadow-lg" dir="rtl">
      <p className="text-sm">
        <strong>{payload[0].payload.name}:</strong>{" "}
        {payload[0].value}
      </p>
    </div>
  );
};
export default CustomTooltip;

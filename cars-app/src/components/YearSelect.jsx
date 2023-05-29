

const YearSelect = ({handleYearChange, selectedYear}) => {
  const startYear = 1900;
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => startYear + index);
  


  return (
    <select value={selectedYear} onChange={handleYearChange}>
      <option value="">Select a year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearSelect;

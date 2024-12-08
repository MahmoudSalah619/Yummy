import { useState } from "react";
import { DatePicker } from "antd";
import type { TimeRangePickerProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import styles from "./styles.module.scss";
import RangeInput from "../RangeInput";
import Button from "../../Atoms/Button";

const { RangePicker } = DatePicker;

const rangePresets: TimeRangePickerProps["presets"] = [
  { label: "Today", value: [dayjs().startOf("day"), dayjs().endOf("day")] },
  {
    label: "Yesterday",
    value: [
      dayjs().subtract(1, "day").startOf("day"),
      dayjs().subtract(1, "day").endOf("day"),
    ],
  },
  {
    label: "This Week",
    value: [dayjs().startOf("week"), dayjs().endOf("week")],
  },
  {
    label: "Last Week",
    value: [
      dayjs().subtract(1, "week").startOf("week"),
      dayjs().subtract(1, "week").endOf("week"),
    ],
  },
  {
    label: "This Month",
    value: [dayjs().startOf("month"), dayjs().endOf("month")],
  },
  {
    label: "Last Month",
    value: [
      dayjs().subtract(1, "month").startOf("month"),
      dayjs().subtract(1, "month").endOf("month"),
    ],
  },
  {
    label: "This Year",
    value: [dayjs().startOf("year"), dayjs().endOf("year")],
  },
  {
    label: "Last Year",
    value: [
      dayjs().subtract(1, "year").startOf("year"),
      dayjs().subtract(1, "year").endOf("year"),
    ],
  },
  {
    label: "All Time",
    value: [dayjs("1970-01-01"), dayjs().endOf("day")],
  },
];

function SelectDates() {
  const [selectedRange, setSelectedRange] = useState<
    [Dayjs | null, Dayjs | null]
  >([dayjs().startOf("day"), dayjs().endOf("day")]);
  const [open, setOpen] = useState(false);

  const handleRangeChange = (dates: null | (Dayjs | null)[]) => {
    setSelectedRange(dates as [Dayjs | null, Dayjs | null]);
    console.log("Selected Range:", dates);
  };

  const customFooterContent = (
    <div className={styles.customFooterContent}>
      <RangeInput
        inputClassName={styles.rangeInput}
        fromValue={selectedRange?.[0]?.format("MMM D, YYYY") || ""}
        toValue={selectedRange?.[1]?.format("MMM D, YYYY") || ""}
      />
      <Button
        title="Cancel"
        variant="transparent-grey"
        onClick={() => setOpen(false)}
      />
      <Button title="Apply" onClick={() => setOpen(false)} />
    </div>
  );

  return (
    <>
      <RangePicker
        open={open}
        value={selectedRange}
        presets={rangePresets}
        onChange={handleRangeChange}
        style={{ visibility: "hidden", width: 0 }}
        renderExtraFooter={() => customFooterContent}
      />
      <Button
        className={styles.button}
        onClick={() => setOpen((prevState) => !prevState)}
        title="Select Dates"
      />
    </>
  );
}

export default SelectDates;

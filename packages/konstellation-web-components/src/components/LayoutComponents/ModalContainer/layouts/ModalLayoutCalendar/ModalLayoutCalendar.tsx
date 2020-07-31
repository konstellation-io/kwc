import { Calendar } from "../../../../Form/Calendar/Calendar";
import { Moment } from "moment";
import React from "react";

export type ModalLayoutCalendarProps = {
  setValue: Function;
  watch: Function;
};

export function ModalLayoutCalendar({
  setValue,
  watch,
}: ModalLayoutCalendarProps) {
  return (
    <Calendar
      onChangeFromDateInput={(date: Moment) => setValue("startDate", date)}
      onChangeToDateInput={(date: Moment) => setValue("endDate", date)}
      formFromDate={watch("startDate")}
      formToDate={watch("endDate")}
      keepOpen
      autoFocus
      addTimeControls
      hideError
    />
  );
}

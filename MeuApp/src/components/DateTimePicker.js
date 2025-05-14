import React, { useState } from "react";
import { View, Button } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

const DateTimePickerDefault = ({ type, buttonTitle, dateKey, setValue }) => {
  const [isDatePickerVisable, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    if (type === "time") {
      const hour = date.getHours();
      const minute = date.getMinutes();
      const formattedTime = `${hour}:${minute}`;
      setValue((prevState) => ({
        ...prevState,
        [dateKey]: date, // date: aaaa/mm/dd
      }));
    }
  };

  return (
    <View>
      <Button title={buttonTitle} onPress={showDatePicker} color="#fff" />
      <DateTimePicker
        isVisible={isDatePickerVisable}
        mode={type}
        locale="pt_BR"
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={{ backgroundcolor: "#fff" }}
        textColor="#000"
      />
    </View>
  );
};

export default DateTimePickerDefault;

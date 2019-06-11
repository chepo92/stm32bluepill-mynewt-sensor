initSidebarItems({"constant":[["SENSOR_DEVICE","We will open internal temperature sensor `temp_stm32_0`. Must sync with apps/my_sensor_app/src/listen_sensor.h"],["SENSOR_TYPE_AMBIENT_TEMPERATURE_RAW","Sensor type for raw temperature sensor. Must sync with libs/custom_sensor/include/custom_sensor/custom_sensor.h"],["TEMP_SENSOR_KEY","Use key (field name) `t` to transmit raw temperature to CoAP Server or Collector Node"],["TEMP_SENSOR_TYPE","Set to raw sensor type"],["TEMP_SENSOR_VALUE_TYPE","Return integer sensor values"],["TEMP_STM32_DEVICE",""]],"fn":[["console_buffer","Add the string to the output buffer. C API: `void console_buffer(const char *buffer, unsigned int length)`"],["console_dump","Append \"length\" number of bytes from \"buffer\" to the output buffer in hex format. C API: `void console_dump(const uint8_t *buffer, unsigned int len)`"],["console_flush","Flush the output buffer to the console. C API: `void console_flush(void)`"],["console_print","Display message `msg` on the Arm Semihosting console (via OpenOCD)."],["console_printfloat","Write a float to the output buffer, with 1 decimal place. C API: `void console_printfloat(float f)`"],["console_printhex","Write a byte in hexadecimal to the output buffer. C API: `void console_printhex(uint8_t v)`"],["device_get_name","Return the name for the Mynewt device.  Assumes name is non-null. C API: `const char *device_get_name(struct os_dev *device)`"],["get_temp_data","Interpret `sensor_data` as a `sensor_temp_data` struct that contains computed temp. Copy the sensor data into `dest`.  Return 0 if successful. C API: `int get_temp_data(void *sensor_data, struct sensor_temp_data *dest)`"],["get_temp_raw_data","Interpret `sensor_data` as a `sensor_temp_raw_data` struct that contains raw temp. Copy the sensor data into `dest`.  Return 0 if successful. C API: `int get_temp_raw_data(void *sensor_data, struct sensor_temp_raw_data *dest)`"],["is_null_sensor","Return non-zero if sensor is NULL. C API: `int is_null_sensor(struct sensor *p)`"],["is_null_sensor_data","Return non-zero if sensor data is NULL. C API: `int is_null_sensor_data(void *p)`"],["null_sensor","Return the NULL sensor. C API: `struct sensor *null_sensor(void)`"],["os_eventq_dflt_get","Retrieves the default event queue processed by OS main task. Return the default event queue."],["os_eventq_run","Pull a single item off the event queue and call it's event callback. `evq`: The event queue to pull the item off."],["rust_sysinit","Initialise the Mynewt system.  Start the Mynewt drivers and libraries.  Equivalent to `sysinit()` macro in C. C API: `void rust_sysinit()`"],["sensor_get_device","Return the Mynewt device for the Mynewt sensor. C API: `struct os_dev *sensor_get_device(struct sensor *s)`"]],"struct":[["SensorTempRawData","Represents a single temperature sensor raw value. Must sync with libs/custom_sensor/include/custom_sensor/custom_sensor.h"],["SensorValue","`sensor_value` represents a decoded sensor data value. Since temperature may be integer (raw) or float (computed), we use the struct to return both integer and float values. `val_type` indicates whether it's an integer or float. Must sync with libs/sensor_coap/include/sensor_coap/sensor_coap.h"]]});
"use client"

import css from "./BookingForm.module.css";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useId, useState } from "react";
import DatePicker from "react-datepicker";
import * as Yup from "yup";

const BookingFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(30, "Name is too long")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    bookingDate: Yup.date()
        .required("Choose the booking date"),
    comment: Yup.string()
});



interface BookingFormValues {
    name: string;
    email: string;
    bookingDate: null | Date;
    comment?: string
};

const initialValues: BookingFormValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
}

export default function BookingForm() {
    const fieldId = useId();
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const handleSubmit = (
    values: BookingFormValues,
    actions: FormikHelpers<BookingFormValues>
  ) => {
    console.log("Booking data:", values);
    actions.resetForm();
  };

    return (
        <Formik initialValues={ initialValues } validationSchema={BookingFormSchema} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
                <Form>
                    <fieldset>
                        <h3>Book your campervan now</h3>
                        <p>Stay connected! We are always ready to help you.</p>

                        <label htmlFor={`${fieldId}-name`}></label>
                        <Field type="text" name="name" id={`${fieldId}-name`} placeholder="Name*" />
                        <ErrorMessage name="name" component="span" className={css.error} />

                        <label htmlFor={`${fieldId}-email`}></label>
                        <Field type="text" name="email" id={`${fieldId}-email`} placeholder="Email*" />
                          <ErrorMessage name="email" component="span" className={css.error} />


                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => {
                                setSelectedDate(date);
                                setFieldValue("bookingDate", date);
                            }}
                            placeholderText="Booking date*"
                            className={css.calendar}
                        />
                        <ErrorMessage name="bookingDate" component="span" className={css.error} />

                        <label htmlFor={`${fieldId}-comment`}></label>
                        <Field as="textarea" type="text" name="comment" id={`${fieldId}-comment`} placeholder="Comment"/>
                    </fieldset>
                    <button type="submit">Send</button>
                </Form>
            )}
        </Formik>
    );
}
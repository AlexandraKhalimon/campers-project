"use client"

import css from "./BookingForm.module.css";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useId, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";

// import DatePicker from "react-datepicker";
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
    const [selectedDate, setSelectedDate] = useState<Date>();

    const handleSubmit = (
        values: BookingFormValues,
        actions: FormikHelpers<BookingFormValues>
    ) => {
        console.log("Booking data:", values);
        actions.resetForm();
    };

    // підправити Error Message
    return (
        <Formik initialValues={initialValues} validationSchema={BookingFormSchema} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
                <Form className={css.form}>
                    <h3 className={css.title}>Book your campervan now</h3>
                    <p className={css.text}>Stay connected! We are always ready to help you.</p>
                    <div className={css.formContainer}>
                        <label htmlFor={`${fieldId}-name`}></label>
                        <Field
                            type="text"
                            name="name"
                            id={`${fieldId}-name`}
                            placeholder="Name*"
                            className={css.input} />
                        <ErrorMessage name="name" component="div" className={css.error} />

                        <label htmlFor={`${fieldId}-email`}></label>
                        <Field
                            type="email"
                            name="email"
                            id={`${fieldId}-email`}
                            placeholder="Email*"
                            className={css.input} />
                        <ErrorMessage name="email" component="span" className={css.error} />

                        <div className={css.calendar}>
                            <Flatpickr
                                value={selectedDate}
                                onChange={([date]) => {
                                    setSelectedDate(date);
                                    setFieldValue("bookingDate", date)
                                }}
                                options={{
                                    altFormat: "F j, Y",
                                    dateFormat: "Y-m-d",
                                    locale: {
                                        firstDayOfWeek: 1
                                    }
                                }}
                                placeholder="Booking date*"
                                className={css.input}
                            />
                            <ErrorMessage name="bookingDate" component="span" className={css.error} />
                        </div>
                        

                        <label htmlFor={`${fieldId}-comment`}></label>
                        <Field
                            as="textarea"
                            type="text"
                            name="comment"
                            id={`${fieldId}-comment`}
                            placeholder="Comment"
                            className={css.textarea} />
                    </div>
                    <button type="submit" className={css.button}>Send</button>
                </Form>
            )}
        </Formik>
    );
}
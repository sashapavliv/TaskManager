import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Dialog} from "@material-ui/core";
import {ITask} from "../../../types/Task";
import ModalComponent from "../modalComponent/modalComponent";
import './createEdit.scss';

interface IProps {
    handleClose: Function;
    changeData: Function;
    open: boolean;
    task?: ITask;
}

const CreateEditModal = ({handleClose, open, task, changeData}: IProps) => {

    const [taskData, setTaskData] = useState({title: '', description: ''}) as any;
    const close = () => handleClose();
    const submit = (values: any, {setSubmitting}: any) => {
        changeData(task ? {...values, id: task.id, isCompleted:task.isCompleted} : values);
        setSubmitting(false);
        handleClose();
    };
    const handleValidate = (values: any) => {
        const errors: any = {};
        if (values.title.trim().length === 0) errors.title = 'Title is required'
        return errors;
    }
    const textArea = ({field, ...props}: any) => {
        return <textarea {...field} {...props}></textarea>
    }

    useEffect(() => {
        if (task) {
            setTaskData({title: task.title, description: task.description});
        }
    }, [task])

    return (
        <Dialog open={open} onClose={close}>
            <ModalComponent handleClose={handleClose} title={task?'Edit task':'Add task'}>
                <div className={'dialog'}>
                    <Formik initialValues={taskData} onSubmit={submit} validate={handleValidate}>
                        {({isSubmitting}) => {
                            return (
                                <Form>
                                    <div className={'form'}>
                                        <div className={'input-container'}>
                                            <div className={'data-container'}>
                                                <p>Title</p>
                                                <Field className={'input'} placeholder={"title"} type={'text'}
                                                       name={'title'}/>
                                                <ErrorMessage className={'error-title'} component={'div'}
                                                              name={'title'}/>
                                            </div>
                                            <div className={'body-container'}>
                                                <p>Description</p>
                                                <Field component={textArea} className={'text-area'}
                                                       placeholder={"description"} type={'text'} name={'description'}/>
                                                <ErrorMessage className={'error-body'} component={'div'}
                                                              name={'description'}/>
                                            </div>
                                        </div>
                                        <div className={'add-button'}>
                                            <button disabled={isSubmitting} type={'submit'}>{task?'Edit':'Add'}</button>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </ModalComponent>
        </Dialog>
    );
};

export default CreateEditModal;
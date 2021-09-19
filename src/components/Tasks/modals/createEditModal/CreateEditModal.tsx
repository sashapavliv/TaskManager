import React, {useEffect, useState} from 'react';
import Icon from "../../../../assets/Icon/Icon";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Dialog} from "@material-ui/core";
import {ITask} from "../../../../types/Task";
import './styleModals.scss';

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
        let data = null;
        if (!task) {
            data = {
                title: values.title,
                description: values.description
            }
        }
        changeData(task ? {title: values.title, description: values.description, id: task.id} : data);
        values = null;
        setSubmitting(false);
        handleClose();
    };
    // const handleValidate = (values:any) => {
    //     let errors ={
    //         title: '',
    //         description: ''
    //     };
    //     if(values.title.length===0) errors.title = 'Title is required'
    //     if(values.description.length===0) errors.description = 'Description is required'
    //     return errors;
    // }
    const textArea = ({field, form, ...props}: any) => {
        return <textarea {...field} {...props}></textarea>
    }

    useEffect(() => {
        if (task) {
            setTaskData({title: task.title, description: task.description});
        }
    }, [])

    

    return (
        <Dialog  PaperProps={{style: {overflowY: 'hidden'}}} open={open} onClose={close}>
            <div className={'dialog'}>
                <div className={'close-icon'}>
                    <Icon onClick={handleClose} icon="delete" className={'icon'} size={"20"} color={"#4993fa"}/>
                </div>
                <Formik initialValues={taskData} onSubmit={submit} /*validate={handleValidate}*/>
                    {({isSubmitting}) => {
                        return (
                            <Form>
                                <div className={'form'}>
                                    <div className={'input-container'}>
                                        <div className={'data-container'}>
                                            <p>Title</p>
                                            <Field className={'input'} placeholder={"title"} type={'text'} name={'title'}/>
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
                                        <button disabled={isSubmitting} type={'submit'}>Add</button>
                                    </div>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </Dialog>
    );
};

export default CreateEditModal;
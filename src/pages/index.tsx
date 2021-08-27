import {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

type Inputs = {
  title: string;
  content: string;
};

const App: React.FC = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", {required: true, maxLength: 30})} />
      <textarea {...register("content", {required: true, maxLength: 100})} />
      {errors.title && <span>タイトル必須</span>}

      <input type="submit" />
    </form>
  );
};

export default App;

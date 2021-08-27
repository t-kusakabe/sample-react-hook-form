import {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

type Inputs = {
  title: string;
  content: string;
};

const App: React.FC = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();

  const onSubmit = (data: any) => console.log(data);

  const Title = watch('title');
  const Content = watch('content');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("title", {required: true, maxLength: 30})} />
        {Title ? "OK" : "必須"}
        {errors.title && <span>タイトル必須</span>}
      </div>

      <div>
        <textarea {...register("content", {required: true, maxLength: 100})} />
        {Content ? "OK" :"必須"}
        {errors.content && <span>タイトル必須</span>}
      </div>

      <input type="submit" />
    </form>
  );
};

export default App;

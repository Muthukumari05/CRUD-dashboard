import * as React from 'react';
import Person from '../models/person';
import { PostForm } from '../component/home.component';

interface IProps {
    person: Person;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const PersonPage: React.FunctionComponent<IProps> = (props: IProps) => {  
    return (
        <PostForm
            person={props.person}
            onChange={props.onChange}
            onSave={props.onSave}
        />
    );
}

import React from 'react';
import {Formik} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

// Components
import {DefaultButton} from '../Buttons/DefaultButton';
import {DefaultTextInput} from '../Inputs/DefaultInput';

const StyledFormWrapper = styled.View`
	margin: 0 20px;
`;

const validationSchema = Yup.object().shape({
	username: Yup.string()
	.trim()
	.required('Username required'),
	password: Yup.string()
	.matches(/^.{6,}$/, 'Invalid password format.')
	.required('Password required')
});

export const SignInForm = ({ signIn }) => (
	<Formik
		onSubmit={(values, props) => {
			signIn(values);
		}}
		initialValues={{
			username: '',
			password: ''
		}}
		validationSchema={validationSchema}
		render={({ errors, isSubmitting, isValid, handleSubmit, setFieldValue, values }) => (
			<StyledFormWrapper>
				<DefaultTextInput
					label={'Username'}
					error={isSubmitting && errors.username}
					value={values.username}
					onChange={(username) => setFieldValue('username', username)}
					autoFocus={true}
					keyboardType={'email-address'}
				/>
				<DefaultTextInput
					label={'Password'}
					error={isSubmitting && errors.password}
					value={values.password}
					onChange={(password) => setFieldValue('password', password)}
					lastChild={true}
					secureTextEntry={true}
				/>
				<DefaultButton
					onPress={handleSubmit}
					text={'Login'}
					disabled={!isValid}
				/>
			</StyledFormWrapper>
		)}
	/>
);

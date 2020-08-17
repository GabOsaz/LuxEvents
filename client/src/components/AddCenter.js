import React, { useState, useContext } from 'react';
import { Form, Formik } from 'formik';
// import * as Yup from 'yup';
import Card from './common/Card';
import Label from './common/Label';
import FormInput from './common/FormInput';
import FormSuccess from './common/FormSuccess';
import FormError from './common/FormError';
import GradientBar from './common/GradientBar';
import GradientButton from './common/GradientButton';
import { publicFetch } from '../util/fetch';
import { AuthContext } from '../context/AuthContext'

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string().required(
//     'First name is required'
//   ),
//   lastName: Yup.string().required('Last name is required'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Email is required'),
//   password: Yup.string().required('Password is required')
// });

const AddCenter = () => {
  const authContext = useContext(AuthContext)
  const [creationSuccess, setCreationSuccess] = useState();
  const [creationError, setCreationError] = useState();
  const [loading, setLoading] = useState(false);

  const submitCredentials = async credentials => {
    try {
      setLoading(true);
      const { data } = await publicFetch.post('eventCenters', credentials);
      authContext.setAuthState(data);
      console.log(data);
      setCreationSuccess(data.message);
      setCreationError('');
    } catch (error) {
      setLoading(false);
      const { data } = error.response;
      setCreationError(data.message);
      setCreationSuccess('');
    }
  };

  return (
    <>
      <section className="w-full h-screen m-auto p-4 sm:pt-10">
        <GradientBar />
        <Card>
          <div className="flex items-center justify-center py-3 px-4 sm:px-6 lg:px-8">
            <div className="max-w w-full">
              <div>
                <h2 className="mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Add Event Center
                </h2>
              </div>
              <Formik
                initialValues={{
                  name: '',
                  state: '',
                  city: '',
                  capacity: '',
                  parkingSpace: '',
                  location: '',
                  services: '',
                  description: '',
                  style: '',
                  amenities: '',
                }}
                onSubmit={values =>
                  submitCredentials(values)
                }
                // validationSchema={SignupSchema}
              >
                {() => (
                  <Form className="mt-8">
                    {creationSuccess && (
                      <FormSuccess text={creationSuccess} />
                    )}
                    {creationError && (
                      <FormError text={creationError} />
                    )}
                    <input
                      type="hidden"
                      name="remember"
                      value="true"
                    />
                    <div className='w-50' >
                      <div className="flex">
                        <div className="mb-2 mr-2 w-full">
                          <div className="mb-1">
                            <Label text="Name of Event Center" />
                          </div>
                          <FormInput
                            ariaLabel="Name"
                            name="name"
                            type="text"
                            placeholder="What is it called?"
                          />
                        </div>
                        <div className="mb-2 ml-2 w-full">
                          <div className="mb-1">
                            <Label text="State" />
                          </div>
                          <FormInput
                            ariaLabel="State"
                            name="state"
                            type="text"
                            placeholder="state"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="mb-2 mr-2 w-full">
                          <div className="mb-1">
                            <Label text="City" />
                          </div>
                          <FormInput
                            ariaLabel="City"
                            name="city"
                            type="text"
                            placeholder="which city?"
                          />
                        </div>
                        <div className="mb-2 ml-2 w-full">
                          <div className="mb-1">
                            <Label text="Capacity" />
                          </div>
                          <FormInput
                            ariaLabel="Capacity"
                            name="capacity"
                            type="text"
                            placeholder="capacity?"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="mb-2 mr-2 w-full">
                          <div className="mb-1">
                            <Label text="Parking Spaces" />
                          </div>
                          <FormInput
                            ariaLabel="Parking Spaces"
                            name="parkingSpaces"
                            type="text"
                            placeholder="capacity of parking space available?"
                          />
                        </div>
                        <div className="mb-2 ml-2 w-full">
                          <div className="mb-1">
                            <Label text="Location" />
                          </div>
                          <FormInput
                            ariaLabel="Location"
                            name="location"
                            type="text"
                            placeholder="street address?"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="mb-2 mr-2 w-full">
                          <div className="mb-1">
                            <Label text="Services" />
                          </div>
                          <FormInput
                            ariaLabel="Services"
                            name="services"
                            type="text"
                            placeholder="What services are rendered?"
                          />
                        </div>
                        <div className="mb-2 ml-2 w-full">
                          <div className="mb-1">
                            <Label text="Description" />
                          </div>
                          <FormInput
                            ariaLabel="Description"
                            name="description"
                            type="text"
                            placeholder="Some highlights..."
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="mb-2 mr-2 w-full">
                          <div className="mb-1">
                            <Label text="Style" />
                          </div>
                          <FormInput
                            ariaLabel="Style"
                            name="style"
                            type="text"
                            placeholder="style"
                          />
                        </div>
                        <div className="mb-2 ml-2 w-full">
                          <div className="mb-1">
                            <Label text="Amenities" />
                          </div>
                          <FormInput
                            ariaLabel="Amenities"
                            name="amenities"
                            type="text"
                            placeholder="what are the available amenities?"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <GradientButton
                        type="submit"
                        text="Submit data"
                        loading={loading}
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
};

export default AddCenter;

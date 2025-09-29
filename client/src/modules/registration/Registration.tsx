import { Button, Checkbox, Container, Flex, Grid, Group, Radio, ScrollArea, Stack, Switch, Text, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import { REGISTRATION_FORM_INITIAL_FORM } from "./utility/constants/registration.constants";
import { registrationFormValidationSchema } from "./utility/validations/registration.validation";

const Registration = () => {

    const registrationForm = useForm({
        initialValues: REGISTRATION_FORM_INITIAL_FORM,
        validate: yupResolver(registrationFormValidationSchema),
        validateInputOnBlur: true,
        validateInputOnChange: false
    });

    return (
        <ScrollArea
            h="100%"
        >
            <Container
                my={32}
            >
                <form onSubmit={registrationForm.onSubmit((values) => console.log(values))}>
                    <Stack
                        gap="md"
                    >
                        <Flex
                            direction="column"
                        >
                            <Text>First Name</Text>
                            <TextInput
                                {...registrationForm.getInputProps('firstName')}
                            />
                        </Flex>
                        <Flex
                            direction="column"
                        >
                            <Text>Last Name</Text>
                            <TextInput
                                {...registrationForm.getInputProps('lastName')}
                            />
                        </Flex>
                        <Flex
                            direction="column"
                        >
                            <Text>Email</Text>
                            <TextInput
                                {...registrationForm.getInputProps('email')}
                            />
                        </Flex>
                        <Flex
                            w="100%"
                        >
                            <Grid
                                w="100%"
                                align="center"
                            >
                                <Grid.Col span={6}>
                                    <Flex
                                        direction="column"
                                    >
                                        <Text>Date Of Birth</Text>
                                        <DatePickerInput
                                            {...registrationForm.getInputProps('dateOfBirth')}
                                            maxDate={new Date()}
                                            minDate="1950-01-01"
                                        />
                                    </Flex>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Flex
                                        direction="column"
                                    >
                                        <Text>Notification</Text>
                                        <Switch
                                            label="Receive Notification"
                                            {...registrationForm.getInputProps('notification', {type: 'checkbox'})}
                                        />
                                    </Flex>
                                </Grid.Col>
                            </Grid>
                        </Flex>
                        <Flex
                            direction="column"
                        >
                            <Text>Password</Text>
                            <TextInput
                                {...registrationForm.getInputProps('password')}
                            />
                        </Flex>
                        <Flex
                            direction="column"
                        >
                            <Text>Confirm Password</Text>
                            <TextInput
                                {...registrationForm.getInputProps('confirmPassword')}
                            />
                        </Flex>
                        <Flex
                            direction="column"
                        >
                            <Text>Select Gender</Text>
                            <Radio.Group
                                name="gender"
                                {...registrationForm.getInputProps('gender')}
                            >
                                <Group>
                                    <Radio
                                        value="male"
                                        label="Male"
                                    />
                                    <Radio
                                        value="female"
                                        label="Female"
                                    />
                                </Group>
                            </Radio.Group>
                        </Flex>
                        <Checkbox
                            label="I agree to sell my privacy"
                            variant="outline"
                            {...registrationForm.getInputProps('toc', {type: 'checkbox'})}
                        />
                    </Stack>
                    <Button
                        type="submit"
                        mt={20}
                        disabled={!registrationForm.isValid()}
                    >
                        <Text>Submit</Text>
                    </Button>
                </form>
            </Container>
        </ScrollArea>
    );
}

export default Registration;
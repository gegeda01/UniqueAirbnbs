import ContactSection from "../components/ContactSection"
import {within,userEvent,waitFor} from '@testing-library/dom'
const ContactForm={
    component:ContactSection,
    argTypes: { onClick: { action: 'clicked' } },
}

export default ContactForm

const Template = (args) => <ContactSection {...args}/>

export const FirstForm = Template.bind({})

FirstForm.args = {
    round:false
}

export const SecondForm = Template.bind({})

SecondForm.play = async (context,args) => {
    const canvas =within(context.canvasElement)

    await userEvent.type(canvas.getByTestId('email'), 'hi@example.com');

    await waitFor(() => expect(args.onClick).toHaveBeenCalled)
}

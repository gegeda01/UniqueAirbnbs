import ContactSection from "../components/ContactSection"
import {within,userEvent,waitFor,screen} from '@testing-library/dom'

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

SecondForm.play = async () => {
    const typeInput = screen.getByTestId("name")

    await userEvent.type(typeInput,"Kathy",{delay:100});


}

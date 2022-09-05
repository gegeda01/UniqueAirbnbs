import Btn from "../components/Button";

const button={
    component:Btn,
    argTypes: { onClick: { action: 'clicked' } },
}

export default button;

const Template = args => <Btn {...args}/>

export const Small = Template.bind({})

Small.args = {
    big:false,
    label:"Press Me"
}

export const Green = Template.bind({})

Green.args = {
    label:"Press Me",
    primarycolor:true
}


export const Round = Template.bind({})

Round.args ={
    label:"Press Me",
    round:true
}
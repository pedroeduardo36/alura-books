import React, { Component } from "react";
import {PedButton} from '../src'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Components/PedButton',
    component: PedButton
} as ComponentMeta<typeof PedButton>

const Template: ComponentStory<typeof PedButton> = () => <PedButton />

export const Primary = Template.bind({})
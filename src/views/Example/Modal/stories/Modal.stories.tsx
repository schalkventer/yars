import React from "react"
import * as viewMocks from '../../mocks';
import { Modal } from "../Modal"
import { action } from "@storybook/addon-actions";


export default {
  title: "views/Example/Modal/Modal",
  component: Modal,
}

const data = viewMocks.createPresentationRow();

export const Default = () => <Modal data={data} onUpdateProduct={action('onUpdateProduct')} auto={false} />;
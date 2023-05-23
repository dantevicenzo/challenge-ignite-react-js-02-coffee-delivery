import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'
import {
  Form,
  FormContainer,
  FormCard,
  FormTitleContainer,
  Input,
  InputContainer,
  InputL,
  InputM,
  InputRow,
  InputS,
  TextMedium,
  TextSmall,
  TitleExtraSmall,
  FormRow,
  PaymentMethodList,
  OrderConfirmationCard,
  Divider,
  OrderPriceRow,
  OrderPriceContainer,
  OrderPriceTitle,
  OrderPriceValue,
  ConfirmOrderButton,
} from './styles'

import { OrderItem } from './OrderItem'

import imgExpressoTradicional from '../../assets/Type=Expresso.png'
import imgLatte from '../../assets/Type=Latte.png'

export function Checkout() {
  return (
    <Form action="/success">
      <FormRow>
        <TitleExtraSmall>Complete seu pedido</TitleExtraSmall>
        <FormContainer>
          <FormCard>
            <FormTitleContainer color="yellowDark">
              <MapPin size={18} />
              <div>
                <TextMedium>Endereço de Entrega</TextMedium>
                <TextSmall>
                  Informe o endereço onde deseja receber seu pedido
                </TextSmall>
              </div>
            </FormTitleContainer>

            <InputContainer>
              <InputM type="text" placeholder="CEP" />
              <InputL type="text" placeholder="Rua" />
              <InputRow>
                <InputM type="text" placeholder="Número" />
                <Input type="text" placeholder="Complemento" />
              </InputRow>
              <InputRow>
                <InputM type="text" placeholder="Bairro" />
                <Input type="text" placeholder="Cidade" />
                <InputS type="text" placeholder="UF" />
              </InputRow>
            </InputContainer>
          </FormCard>
          <FormCard>
            <FormTitleContainer color="purple">
              <CurrencyDollar size={18} />
              <div>
                <TextMedium>Pagamento</TextMedium>
                <TextSmall>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </TextSmall>
              </div>
            </FormTitleContainer>
            <PaymentMethodList>
              <li>
                <CreditCard size={16} />
                Cartão de crédito
              </li>
              <li>
                <Bank size={16} />
                Cartão de débito
              </li>
              <li>
                <Money size={16} />
                Dinheiro
              </li>
            </PaymentMethodList>
          </FormCard>
        </FormContainer>
      </FormRow>
      <FormRow>
        <TitleExtraSmall>Cafés selecionados</TitleExtraSmall>
        <OrderConfirmationCard>
          <OrderItem
            id="input-expressoTradicional"
            imgSrc={imgExpressoTradicional}
            title="Expresso Tradicional"
            price="R$ 9,90"
          />
          <Divider />
          <OrderItem
            id="input-latte"
            imgSrc={imgLatte}
            title="Latte"
            price="R$ 19,80"
          />
          <Divider />
          <OrderPriceContainer>
            <OrderPriceRow>
              <OrderPriceTitle>Total de itens</OrderPriceTitle>
              <OrderPriceValue>R$ 29,70</OrderPriceValue>
            </OrderPriceRow>
            <OrderPriceRow>
              <OrderPriceTitle>Entrega</OrderPriceTitle>
              <OrderPriceValue>R$ 3,50</OrderPriceValue>
            </OrderPriceRow>
            <OrderPriceRow>
              <OrderPriceTitle>Total</OrderPriceTitle>
              <OrderPriceValue>R$ 33,20</OrderPriceValue>
            </OrderPriceRow>
          </OrderPriceContainer>
          <ConfirmOrderButton type="submit">
            Confirmar Pedido
          </ConfirmOrderButton>
        </OrderConfirmationCard>
      </FormRow>
    </Form>
  )
}

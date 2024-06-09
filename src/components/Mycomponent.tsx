import { beginCell, toNano, Address, Cell, fromNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { useFaucetJettonContract } from "../hooks/useFaucetJettonContract";
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
} from "./styled/styled";

export function Mycomponent() {

  return (
    <Card title="Тестовый компонент">
      <FlexBoxCol>
        <FlexBoxRow>
            <Ellipsis>Какой-то текст</Ellipsis>
            <Ellipsis>Еще один текст</Ellipsis>
        </FlexBoxRow>
        <Ellipsis>Другой текст</Ellipsis>
      </FlexBoxCol>
    </Card>
  );
}

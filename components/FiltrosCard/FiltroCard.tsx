import * as S from './styles';


export type FiltroProps = {
  ativo?: boolean;
  contador:number;
  legenda:string;
};

const FiltroCard = ({ativo, contador, legenda}: FiltroProps)=> (

  <S.Card ativo={ativo}> 
  <S.Contador>{contador}</S.Contador>
  <S.Label>{legenda}</S.Label>
</S.Card>
)
;


export default FiltroCard;





/* export type FiltroProps = {
  ativo?: boolean;
  contador:number;
  legenda:string;
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function FiltroCard({
  ativo = false,
  lightColor,
  darkColor,
  type = 'default',

  contador,
  legenda,
  ...rest
}: FiltroProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <S.Card ativo={ativo} contador={contador} legenda={legenda} {...rest}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  );
} */

/* const styles = StyleSheet.create({
  card: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    width: 110,
  },
  contador: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
    
  },
});
 */
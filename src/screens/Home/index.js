import React from 'react';
import { Text, View, ScrollView, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

import eyeIcon from '../../assets/icons/olho/drawable-hdpi/outline_disabled_visible_black_20.png';
import settingsIcon from '../../assets/icons/settings/drawable-hdpi/outline_settings_black_20.png';
import phoneIcon from '../../assets/icons/phone/drawable-hdpi/outline_smartphone_black_18.png';
import coin from '../../assets/icons/coin/drawable-hdpi/outline_monetization_on_black_18.png';
import euro from '../../assets/icons/euro/drawable-hdpi/outline_euro_symbol_black_18.png';
import umbrella from '../../assets/icons/umbrella/drawable-hdpi/outline_beach_access_black_18.png';
import invest from '../../assets/icons/invest/drawable-hdpi/outline_trending_up_black_18.png';
import wpp from '../../assets/icons/wpp/drawable-hdpi/outline_chat_bubble_outline_black_18.png';
import card2 from '../../assets/icons/card2/drawable-hdpi/outline_credit_score_black_18.png';
import pix from '../../assets/icons/pix/drawable-hdpi/outline_control_camera_black_18.png';
import add from '../../assets/icons/add/drawable-hdpi/outline_person_add_alt_black_18.png';
import pig from '../../assets/icons/pig/drawable-hdpi/outline_savings_black_18.png';
import card from '../../assets/icons/card/drawable-hdpi/outline_credit_card_black_18.png';
import phone2 from '../../assets/icons/phone2/drawable-hdpi/outline_mobile_friendly_black_18.png';
import adjust from '../../assets/icons/adjust/drawable-hdpi/outline_tune_black_18.png';
import lock from '../../assets/icons/lock/drawable-hdpi/outline_https_black_18.png';
import falta from '../../assets/icons/falta/drawable-hdpi/outline_disabled_by_default_black_18.png';
import help from '../../assets/icons/help/drawable-hdpi/outline_contact_support_black_18.png';

export const Home = () => {

    return (
        <LinearGradient style={{ flex: 1 }} colors={["#820AD1", "#820AD1"]}>
            <StatusBar hidden={false} backgroundColor="#820AD1" />
            <View style={styles.homeScreen}>
                <View style={styles.header}>
                    <Text style={styles.welcome}>Olá, Frederico </Text>
                    <View style={styles.headerButtonsContainer}>
                        <View style={styles.headerButtons}>
                            <Image style={styles.headerButtonsImage} source={eyeIcon} />
                        </View>
                        <View style={styles.headerButtons}>
                            <Image style={styles.headerButtonsImage} source={settingsIcon} />
                        </View>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.containerVertical}>
                    <View style={styles.containerCartãoCrédito}>
                        <View style={styles.containerTitleTextIconImage}>
                            <Image style={styles.IconImage} source={phoneIcon} />
                            <Text style={styles.titleText}>Cartão de Crédito</Text>
                        </View>
                        <Text style={styles.descriptionText}>Fatura atual</Text>
                        <Text style={styles.creditoValue}>R$ 1.000,00</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.descriptionText}> Limite disponível</Text>
                            <Text style={styles.limitValue}> R$ 5.000,00</Text>
                        </View>
                    </View>
                    <View style={styles.containerConta}>
                        <View style={styles.containerTitleTextIconImage}>
                            <Image style={styles.IconImage} source={coin} />
                            <Text style={styles.titleText}>Conta</Text>
                        </View>
                        <Text style={styles.descriptionText}>Saldo Disponível</Text>
                        <Text style={styles.contaValue}>R$ 2.000,00</Text>
                    </View>
                    <View style={styles.containerEmprestimo}>
                        <View style={ styles.containerTitleTextIconImage }>
                            <Image style={styles.IconImage} source={euro} />
                            <Text style={styles.titleText}>Empréstimo</Text>
                        </View>
                        <View>
                            <Text style={styles.descriptionText}> Valor disponível de até</Text>
                            <Text style={styles.emprestimoValue}> R$ 10.000,00</Text>
                        </View>
                        <View>
                            <Text style={styles.buttom}>SIMULAR EMPRÉSTIMO</Text>
                        </View>
                    </View>
                    <View style={styles.containerVida}>
                        <View style={styles.containerTitleTextIconImage}>
                            <Image style={styles.IconImage} source={umbrella} />
                            <Text style={styles.titleSpecial}>Seguro de vida</Text>
                        </View>
                        <View>
                            <Text style={styles.descriptionText}> Conheça Nubank Vida: um seguro</Text>
                            <Text style={styles.descriptionText}> simples e que cabe no bolso.</Text>
                        </View>
                        <View>
                            <Text style={styles.buttom}>CONHECER</Text>
                        </View>
                    </View>
                    <View style={styles.containerInvest}>
                        <View style={styles.containerTitleTextIconImage}>
                            <Image style={styles.IconImage} source={invest} />
                            <Text style={styles.titleText}>Investimento Easynvest</Text>
                        </View>
                        <View style={{ paddingBottom: 10 }}>
                            <Text style={styles.descriptionText}> Conheça Easynvest e invista com</Text>
                            <Text style={styles.descriptionText}> taxa zero de corretagem e sem</Text>
                            <Text style={styles.descriptionText}> burocracias!</Text>
                        </View>
                        <View>
                            <Text style={styles.buttom}>CONHECER</Text>
                        </View>
                    </View>
                    <View style={styles.containerWpp}>
                        <View style={styles.containerTitleTextIconImage}>
                            <Image style={styles.IconImage} source={wpp} />
                            <Text style={styles.titleText}>Pagamentos no WhatsApp</Text>
                        </View>
                        <View>
                            <Text style={styles.subTitle}> Envie e receba dinheiro sem sair</Text>
                            <Text style={styles.subTitle}> da conversa</Text>
                        </View>
                        <View style={{ paddingBottom: 5 }}>
                            <Text style={styles.descriptionText}> Os pagamentos no WhatsApp são</Text>
                            <Text style={styles.descriptionText}> seguros, rápidos e sem tarifa. Tão</Text>
                            <Text style={styles.descriptionText}> fácil quanto mandar uma foto de</Text>
                            <Text style={styles.descriptionText}> "bom dia!" no grupo da familia.</Text>
                        </View>
                        <View>
                            <Text style={styles.buttom}>Quero conhecer</Text>
                        </View>
                    </View>
                    <View style={styles.containerPay}>
                        <View style={styles.containerTitleTextIconImage}>
                            <Image style={styles.IconImage} source={card2} />
                            <Text style={styles.titleText}>Google Pay</Text>
                        </View>
                        <View>
                            <Text style={styles.descriptionText}> Use o Google Pay com seus cartões</Text>
                            <Text style={styles.descriptionText}> Nubank</Text>
                        </View>
                        <View>
                            <Text style={styles.buttom}>REGISTRAR MEU CARTÃO</Text>
                        </View>
                    </View>
                </ScrollView>
                <ScrollView style={styles.containerHorizontal} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={pix} />
                        <Text style={styles.smallText}>Pix</Text>
                    </View>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={card2} />
                        <Text style={styles.smallText}>Pagar</Text>
                    </View>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={add} />
                        <Text style={styles.smallText}>Indicar amigos</Text>
                    </View>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={euro} />
                        <Text style={styles.smallText}>Transferir</Text>
                    </View>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={pig} />
                        <Text style={styles.smallText}>Depositar</Text>
                    </View>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={euro} />
                        <Text style={[styles.smallText, {fontSize:13}]}>Empréstimos</Text>
                    </View>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={card} />
                        <Text style={styles.smallText}>Cartão virtual</Text>
                    </View>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={phone2} />
                        <Text style={styles.smallText}>Recarga celular</Text>
                    </View>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={adjust} />
                        <Text style={styles.smallText}>Ajustar limite</Text>
                    </View>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={lock} />
                        <Text style={styles.smallText}>Bloquear cartão</Text>
                    </View>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={falta} />
                        <Text style={styles.smallText}>Cobrar</Text>
                    </View>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={euro} />
                        <Text style={styles.smallText}>Doação</Text>
                    </View>
                    <View style={styles.smallContainers}>
                        <Image style={styles.smallImage} source={help} />
                        <Text style={styles.smallText}>Me ajuda</Text>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}




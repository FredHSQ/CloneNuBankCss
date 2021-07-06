import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export const Home = ({navigation}) => {

    return (
        <LinearGradient style={{ flex: 1 }} colors={["#820AD1", "#820AD1"]}>
            <StatusBar hidden={false} backgroundColor="#820AD1" />
            <View style={{ flex: 1, paddingHorizontal: 5, justifyContent: 'space-around', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, width: '100%' }}>
                    <Text style={{ paddingHorizontal: 15, fontSize: 25, color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>Olá, Frederico </Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <View style={{ borderRadius: 100, backgroundColor: '#900AD1', color: 'white', width: 50, height: 50, marginRight: 10, justifyContent: 'center', paddingHorizontal: 10 }}>
                            <Image style={{ tintColor: 'white' }} source={require('../../assets/icons/olho/drawable-hdpi/outline_disabled_visible_black_20.png')} />
                        </View>
                        <View style={{ borderRadius: 100, backgroundColor: '#900AD1', color: 'white', width: 50, height: 50, marginRight: 10, justifyContent: 'center', paddingHorizontal: 10 }}>
                            <Image style={{ tintColor: 'white' }} source={require('../../assets/icons/settings/drawable-hdpi/outline_settings_black_20.png')} />
                        </View>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
                    <View style={{ backgroundColor: '#fff', height: 180, borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', margin: 10, padding: 20 }}>
                        <View style={{ flexDirection: 'row', textAlignVertical: 'center' }}>
                            <Image style={{ tintColor: '#696969' }} source={require('../../assets/icons/phone/drawable-hdpi/outline_smartphone_black_18.png')} />
                            <Text style={{ color: '#696969', fontSize: 18, paddingLeft: 20, textAlignVertical: 'center', letterSpacing: 0.5 }}>Cartão de Crédito</Text>
                        </View>
                        <Text style={{ color: '#696969', fontSize: 15, paddingVertical: 5, letterSpacing: 0.5 }}>Fatura atual</Text>
                        <Text style={{ color: '#1E90FF', fontSize: 30, fontWeight: 'bold', letterSpacing: 0.5 }}>R$ 1.000,00</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> Limite disponível</Text>
                            <Text style={{ color: 'green', fontSize: 15, fontWeight: 'bold', letterSpacing: 0.5 }}> R$ 5.000,00</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', height: 160, borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', margin: 10, padding: 20 }}>
                        <View style={{ flexDirection: 'row', textAlignVertical: 'center' }}>
                            <Image style={{ tintColor: '#696969' }} source={require('../../assets/icons/coin/drawable-hdpi/outline_monetization_on_black_18.png')} />
                            <Text style={{ color: '#696969', fontSize: 18, paddingLeft: 20, textAlignVertical: 'center', letterSpacing: 0.5 }}>Conta</Text>
                        </View>
                        <Text style={{ color: '#696969', fontSize: 15, paddingVertical: 5, letterSpacing: 0.5 }}>Saldo Disponível</Text>
                        <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', letterSpacing: 0.5 }}>R$ 2.000,00</Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', height: 180, borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', margin: 10, padding: 20 }}>
                        <View style={{ flexDirection: 'row', textAlignVertical: 'center' }}>
                            <Image style={{ tintColor: '#696969' }} source={require('../../assets/icons/euro/drawable-hdpi/outline_euro_symbol_black_18.png')} />
                            <Text style={{ color: '#696969', fontSize: 18, paddingLeft: 20, textAlignVertical: 'center', letterSpacing: 0.5 }}>Empréstimo</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> Valor disponível de até</Text>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', letterSpacing: 0.5 }}> R$ 10.000,00</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#900AD1', borderWidth: 1, borderColor: '#900AD1', borderRadius: 5, padding: 10, letterSpacing: 0.5, fontWeight: 'bold' }}>SIMULAR EMPRÉSTIMO</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', height: 180, borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', margin: 10, padding: 20 }}>
                        <View style={{ flexDirection: 'row', textAlignVertical: 'center' }}>
                            <Image style={{ tintColor: '#696969' }} source={require('../../assets/icons/umbrella/drawable-hdpi/outline_beach_access_black_18.png')} />
                            <Text style={{ color: '#900AD1', fontSize: 22, paddingLeft: 20, textAlignVertical: 'center', letterSpacing: 0.5 }}>Seguro de vida</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> Conheça Nubank Vida: um seguro</Text>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> simples e que cabe no bolso.</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#900AD1', borderWidth: 1, borderColor: '#900AD1', borderRadius: 5, padding: 10, letterSpacing: 0.5, fontWeight: 'bold' }}>CONHECER</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', height: 190, borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', margin: 10, padding: 20 }}>
                        <View style={{ flexDirection: 'row', textAlignVertical: 'center' }}>
                            <Image style={{ tintColor: '#696969' }} source={require('../../assets/icons/invest/drawable-hdpi/outline_trending_up_black_18.png')} />
                            <Text style={{ color: '#696969', fontSize: 18, paddingLeft: 20, textAlignVertical: 'center', letterSpacing: 0.5 }}>Investimento Easynvest</Text>
                        </View>
                        <View style={{ paddingBottom: 5 }}>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> Conheça Easynvest e invista com</Text>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> taxa zero de corretagem e sem</Text>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> burocracias!</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#900AD1', borderWidth: 1, borderColor: '#900AD1', borderRadius: 5, padding: 10, letterSpacing: 0.5, fontWeight: 'bold' }}>CONHECER</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', height: 300, borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', margin: 10, padding: 20 }}>
                        <View style={{ flexDirection: 'row', textAlignVertical: 'center' }}>
                            <Image style={{ tintColor: '#696969' }} source={require('../../assets/icons/wpp/drawable-hdpi/outline_chat_bubble_outline_black_18.png')} />
                            <Text style={{ color: '#696969', fontSize: 18, paddingLeft: 20, textAlignVertical: 'center', letterSpacing: 0.5 }}>Pagamentos no WhatsApp</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5, fontWeight: 'bold' }}> Envie e receba dinheiro sem sair</Text>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5, fontWeight: 'bold' }}> da conversa</Text>
                        </View>
                        <View style={{ paddingBottom: 5 }}>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> Os pagamentos no WhatsApp são</Text>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> seguros, rápidos e sem tarifa. Tão</Text>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> fácil quanto mandar uma foto de</Text>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> "bom dia!" no grupo da familia.</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#900AD1', borderWidth: 1, borderColor: '#900AD1', borderRadius: 5, padding: 10, letterSpacing: 0.5, fontWeight: 'bold' }}>Quero conhecer</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', height: 180, borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', margin: 10, padding: 20 }}>
                        <View style={{ flexDirection: 'row', textAlignVertical: 'center' }}>
                            <Image style={{ tintColor: '#696969' }} source={require('../../assets/icons/card2/drawable-hdpi/outline_credit_score_black_18.png')} />
                            <Text style={{ color: '#696969', fontSize: 18, paddingLeft: 20, textAlignVertical: 'center', letterSpacing: 0.5 }}>Google Pay</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> Use o Google Pay com seus cartões</Text>
                            <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}> Nubank</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#900AD1', borderWidth: 1, borderColor: '#900AD1', borderRadius: 5, padding: 10, letterSpacing: 0.5, fontWeight: 'bold' }}>REGISTRAR MEU CARTÃO</Text>
                        </View>
                    </View>
                </ScrollView>
                <ScrollView style={{ flexDirection: 'row', height: 180, paddingBottom: 10, paddingTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7  }} source={require('../../assets/icons/pix/drawable-hdpi/outline_control_camera_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 15, padding: 7 }}>Pix</Text>
                    </View>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7  }} source={require('../../assets/icons/card2/drawable-hdpi/outline_credit_score_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 15, padding: 7 }}>Pagar</Text>
                    </View>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7 }} source={require('../../assets/icons/add/drawable-hdpi/outline_person_add_alt_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 15, padding: 7 }}>Indicar amigos</Text>
                    </View>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7  }} source={require('../../assets/icons/euro/drawable-hdpi/outline_euro_symbol_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 15, padding: 7 }}>Transferir</Text>
                    </View>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7  }} source={require('../../assets/icons/pig/drawable-hdpi/outline_savings_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 15, padding: 7 }}>Depositar</Text>
                    </View>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7  }} source={require('../../assets/icons/euro/drawable-hdpi/outline_euro_symbol_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 12, padding: 7 }}>Empréstimos</Text>
                    </View>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7  }} source={require('../../assets/icons/card/drawable-hdpi/outline_credit_card_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 15, padding: 7 }}>Cartão virtual</Text>
                    </View>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7  }} source={require('../../assets/icons/phone2/drawable-hdpi/outline_mobile_friendly_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 15, padding: 7 }}>Recarga celular</Text>
                    </View>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7  }} source={require('../../assets/icons/adjust/drawable-hdpi/outline_tune_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 15, padding: 7 }}>Ajustar limite</Text>
                    </View>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7  }} source={require('../../assets/icons/lock/drawable-hdpi/outline_https_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 15, padding: 7 }}>Bloquear cartão</Text>
                    </View>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7  }} source={require('../../assets/icons/falta/drawable-hdpi/outline_disabled_by_default_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 15, padding: 7 }}>Cobrar</Text>
                    </View>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7  }} source={require('../../assets/icons/euro/drawable-hdpi/outline_euro_symbol_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 15, padding: 7 }}>Doação</Text>
                    </View>
                    <View style={{ flex: 1, width: 95, backgroundColor: '#900AD1', borderRadius: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 10, marginLeft: 10 }}>
                        <Image style={{ tintColor: 'white', margin: 7 }} source={require('../../assets/icons/help/drawable-hdpi/outline_contact_support_black_18.png')} />
                        <Text style={{ color: '#e5e5e5e5', fontSize: 15, padding: 7 }}>Me ajuda</Text>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    textOla: {
        backgroundColor: 'red'
    }
})

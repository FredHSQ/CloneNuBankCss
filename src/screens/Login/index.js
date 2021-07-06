import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Login = ({ navigation }) => {

    const [colorBoolean, setColorBoolean] = useState(true);
    const [textUsuario, setTextUsuario] = useState("");
    const [textSenha, setTextSenha] = useState("");

    useEffect(() => {
        if (textUsuario !== "" && textSenha !== "") {
            setColorBoolean(false)
        } else {
            setColorBoolean(true)
        }
    })


    return (
        <LinearGradient style={{ flex: 1 }} colors={["#820AD1", "#820AD1"]}>
            <StatusBar hidden={false} backgroundColor="#820AD1" />
            <View style={{ backgroundColor: 'white', height: 650, width: '95%', justifyContent: 'space-around', margin: '2.5%', borderRadius: 5, marginTop: 5 }}>
                <TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 25, letterSpacing: 0.5, marginTop: 30, marginBottom: 10 }}>Faça seu login</Text>
                </TouchableOpacity>
                <View style={{ borderStyle: 'dotted' }}>
                    <Text style={{ marginHorizontal: '18%', color: 'orange', fontSize: 18 }}>CPF</Text>
                    <TextInput blurOnSubmit={true} onChangeText={text => setTextUsuario(text)} style={{ marginHorizontal: '18%', borderStyle: 'dotted', borderRadius: 1, borderBottomWidth: 0.5, borderColor: 'orange', color: 'black' }} />
                    <Text style={{ marginHorizontal: '18%', color: 'orange', marginTop: 30, fontSize: 18 }}>Senha</Text>
                    <TextInput secureTextEntry={true} blurOnSubmit={true} onChangeText={text => setTextSenha(text)} style={{ marginHorizontal: '18%', borderStyle: 'dotted', borderRadius: 1, borderBottomWidth: 0.5, borderColor: 'orange', color: 'black' }} />
                </View>
                <TouchableOpacity disabled={colorBoolean} style={{ marginHorizontal: '18%' }} onPress={() => navigation.navigate('Home')}>
                    <Text style={{
                        textAlign: 'center',
                        height: 75,
                        textAlignVertical: 'center',
                        color: `${colorBoolean ? 'grey' : '#900AD1'}`,
                        borderWidth: 1,
                        borderColor: `${colorBoolean ? 'grey' : '#900AD1'}`,
                        borderRadius: 5,
                        letterSpacing: 0.5,
                        fontWeight: 'bold'
                    }}>CONTINUAR</Text>
                </TouchableOpacity>
                <View>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: '#900AD1', letterSpacing: 0.5, fontWeight: 'bold', marginBottom: 20, fontSize: 18 }} >Esqueci minha senha &gt;</Text>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: '#900AD1', letterSpacing: 0.5, fontWeight: 'bold', fontSize: 18 }} >Ainda não sou cliente &gt;</Text>
                </View>
            </View>
        </LinearGradient>
    )
}
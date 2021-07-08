import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

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
    },[textUsuario, textSenha])


    return (
        <LinearGradient style={{ flex: 1 }} colors={["#820AD1", "#820AD1"]}>
            <StatusBar hidden={false} backgroundColor="#820AD1" />
            <View style={styles.containerGeral}>
                <Text style={styles.title}>Faça seu login</Text>
                <View>
                    <Text style={styles.inputTitle}>CPF</Text>
                    <TextInput onChangeText={text => setTextUsuario(text)} style={styles.input} />
                    <Text style={[styles.inputTitle, {marginTop: 30 }]}>Senha</Text>
                    <TextInput secureTextEntry={true} onChangeText={text => setTextSenha(text)} style={styles.input} />
                </View>
                <TouchableOpacity disabled={colorBoolean} style={{ marginHorizontal: '18%' }} onPress={() => navigation.navigate('Home')}>
                    <Text style={[styles.loginButton, {color:`${colorBoolean?'grey':'#900AD1'}`,borderColor:`${colorBoolean?'grey':'#900AD1'}`}]}>CONTINUAR</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity>
                        <Text style={[styles.otherOptions, {marginBottom: 20}]} >Esqueci minha senha &gt;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.otherOptions} >Ainda não sou cliente &gt;</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}
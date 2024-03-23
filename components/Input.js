import { StyleSheet, TextInput } from "react-native";

export default function Input(props) {
    const { id, form, setForm } = props;

    return (
        <TextInput style={styles.input} placeholder={`please type your ${id}`} onChangeText={val => setForm((prev) => ({ ...prev, [id]: val }))} value={form[id]} />
    )
};

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
    }
});

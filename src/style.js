import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "#FFF",
    maxWidth: 350,
    marginHorizontal: 30,
    borderRadius: 5
  },
  content: {
    justifyContent: "center",
    padding: 20
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
    lineHeight: 25
  },
  message: {
    textAlign: "center",
    fontSize: 17,
    color: "#666",
    paddingTop: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    flexWrap: "wrap"
  },
  button: {
    backgroundColor: "#00ACEF",
    marginBottom: 20,
    marginHorizontal: 10,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 5,
    minWidth: 90
  },
  buttonCancel: {
    backgroundColor: "#F53D3D"
  },
  textButton: {
    fontSize: 15,
    textAlign: "center",
    color: "#FFF",
    fontWeight: "600"
  }
});

export default styles;

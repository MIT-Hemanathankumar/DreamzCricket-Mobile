import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

const AlertModal = ({
  visible,
  onClose,
  onOk,
  message
}) => {
    // console.log(message);
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </Pressable>
          <Text style={styles.title}>{message}</Text>
          {/* <Text style={styles.subtitle}>Please confirm your action</Text> */}

          {/* <TouchableOpacity style={styles.myTeamButton} onPress={onMyTeamPress}>
            <Text style={styles.myTeamText}>My Team</Text>
          </TouchableOpacity>

          <Text style={styles.or}>or</Text> */}

          <TouchableOpacity style={styles.quickWinButton} onPress={onOk}>
            <Text style={styles.quickWinText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 5,
    zIndex: 10,
  },
  closeText: {
    fontSize: 18,
    color: '#333',
  },
  title: {
    fontSize: 20,
    color: '#2A2E43',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  myTeamButton: {
    backgroundColor: '#D44646',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 15,
  },
  myTeamText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  or: {
    fontSize: 14,
    color: '#444',
    marginBottom: 15,
  },
  quickWinButton: {
    borderColor: '#2A2E43',
    borderWidth: 1.5,
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  quickWinText: {
    color: '#2A2E43',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

# 🔍 FiveM CheckUserBot  

**A real-time admin detection tool for FiveM servers**  
*Keep track of privileged players with minimal performance impact.*  


---

## 🚀 **Features**  
✅ **Instant Admin Detection**  
- Scans connected players and flags admins in real-time  
- Supports multiple permission systems (ACE, vRP, ESX, etc.)  

⚡ **Performance Optimized**  
- Low CPU/RAM usage (runs in background)  
- Configurable scan intervals  

📊 **Logging & Output**  
- Console notifications with player details  
- Optional Discord webhook support  

---

## 📥 **Installation**  

### **Requirements**  
- Node.js v16+  
- FiveM Server with API access  

### **Setup**  
```bash
# Clone & install
git clone https://github.com/Legitsynex/FivemCheckuserbot.git
cd FivemCheckuserbot
npm install

# Configure (edit before starting!)
cp config.example.json config.json
nano config.json

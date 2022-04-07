//
//  ViewController.swift
//  autofillboard
//
//  Created by Mac on 4/3/22.
//

import UIKit
import SafariServices
import SafariServices.SFSafariApplication


class ViewController: UIViewController {

    @IBOutlet weak var versionLabel : UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        self.title = "Home"
        if let version = Bundle.main.infoDictionary?["CFBundleShortVersionString"] as? String {
            if let appVersion = Bundle.main.infoDictionary!["CFBundleVersion"] as? String{
                self.versionLabel.text = "Version \(version).\(appVersion)"
            }else{
                self.versionLabel.text = "Version \(version)"
            }
           
       }
        
//        self.sendMessageToExtension(nil)
    }
    
//    func saveProfile(){
//        let sharedDefault = UserDefaults(suiteName: "group.ideas2it.autofill")!
//        sharedDefault.set(self.versionLabel.text, forKey: "appVersion")
//        sharedDefault.synchronize()
//    }
//
//    func sendMessageToExtension(_ sender: AnyObject?) {
//        let messageName = "Hello from App"
//        let messageInfo = ["AdditionalInformation":"Goes Here"]
//        SFSafariApplication.dispatchMessage(withName: messageName, toExtensionWithIdentifier: "com.ideas2it.autofillboard.AutoFill", userInfo: messageInfo) { error in
//            debugPrint("Message attempted. Error info: \(String.init(describing: error))")
//        }
//    }

    
    @IBAction func onSettings(){
        guard let settingsUrl = URL(string: UIApplication.openSettingsURLString) else {
                    return
                }

                if UIApplication.shared.canOpenURL(settingsUrl) {
                    UIApplication.shared.open(settingsUrl, completionHandler: { (success) in
                        print("Settings opened: \(success)") // Prints true
                    })
    }
    }
    
    @IBAction func onSafari(){
        guard let tedBakerURL = URL(string: "https://www.tedbaker.com") else {
                    return
                }
        
        UIApplication.shared.openURL(tedBakerURL as URL)
    }

}


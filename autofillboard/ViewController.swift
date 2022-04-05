//
//  ViewController.swift
//  autofillboard
//
//  Created by Mac on 4/3/22.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var versionLabel : UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        self.title = "Home"
        if let version = Bundle.main.infoDictionary?["CFBundleShortVersionString"] as? String {
            if let appVersion = Bundle.main.infoDictionary!["CFBundleVersion"] as? String{
                self.versionLabel.text = "Version \(version).\(appVersion)"
            }else{
                self.versionLabel.text = "Version \(version)"
            }
           
       }
        // Do any additional setup after loading the view.
    }

    
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


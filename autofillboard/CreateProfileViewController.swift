//
//  CreateProfileViewController.swift
//  autofillboard
//
//  Created by Mac on 4/7/22.
//

import UIKit

class CreateProfileViewController: UIViewController {

    
    @IBOutlet weak var firstNameTF : IIFormTextField!
    @IBOutlet weak var lastNameTF : IIFormTextField!
    @IBOutlet weak var emailTf : IIFormTextField!
    @IBOutlet weak var phoneNumberTF : IIFormTextField!
    @IBOutlet weak var address1TF : IIFormTextField!
    @IBOutlet weak var address2TF : IIFormTextField!
    @IBOutlet weak var cityTF : IIFormTextField!
    @IBOutlet weak var stateTF : IIFormTextField!
    @IBOutlet weak var countryTF : IIFormTextField!
    @IBOutlet weak var postalCodeTF : IIFormTextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    func saveProfile(){
        
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}

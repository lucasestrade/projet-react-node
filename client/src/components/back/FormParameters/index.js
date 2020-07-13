import React, { useEffect } from 'react';
import ContentInput from "../ContentInput";
import useFormParameters from "../../../hooks/useFormParameters";

function FormParameters() {

    const { selectors, actions } = useFormParameters();
    
    useEffect(() => {
        // actions.getParametersInfo();
    }, [])

    let parameters = selectors.getFormParameters();
    let credential = selectors.getFormCredential();
    
    function onChangeName(event) {
        actions.changeFormParamatersName(event.target.value);
    }

    function onChangeFirstname(event) {
        actions.changeFormParamatersFirstname(event.target.value);
    }

    function onChangeEmail(event) {
        actions.changeFormParamatersEmail(event.target.value);
    }

    function onChangeContact(event) {
        actions.changeFormParamatersContact(event.target.value);
    }

    function onChangeConfirmation(event) {
        actions.changeFormParamatersConfirmation(event.target.value);
    }

    function onChangeAnnulation(event) {
        actions.changeFormParamatersAnnulation(event.target.value);
    }

    function onChangePublic(event) {
        actions.changeFormParamatersPublic(event.target.value);
    }

    function onChangeSecret(event) {
        actions.changeFormParamatersSecret(event.target.value);
    }

    function onChangeRefund(event) {
        actions.changeFormParamatersRefund(event.target.value);
    }

    function onImageChange(event) {
        let file = this.files[0];
        if (file !== undefined) {
            let isSizeOk = this.files[0].size <= 3000000;

            if (isSizeOk) {
                var base64;
                let blob = this.files[0];
                let fileReader = new FileReader();
                let fileReaderForBase64 = new FileReader();

                fileReaderForBase64.addEventListener("load", function (e) {
                    base64 = e.target.result;
                });
                fileReaderForBase64.readAsDataURL(blob);

                fileReader.onloadend = function (e) {
                    let arr = (new Uint8Array(e.target.result)).subarray(0, 4);
                    let header = "";
                    for (let i = 0; i < arr.length; i++) {
                        header += arr[i].toString(16);
                    }

                    let type;
                    switch (header) {
                        case "89504e47":
                            type = "image/png";
                            break;
                        case "52494646":
                            type = "image/webp";
                            break;
                        case "ffd8ffe0":
                        case "ffd8ffe1":
                        case "ffd8ffe2":
                        case "ffd8ffe3":
                        case "ffd8ffe8":
                            type = "image/jpeg";
                            break;
                        default:
                            type = "invalid";
                            break;
                    }

                    if (type !== "invalid") {
                        console.log(base64); // l image en base 64
                    } else {
                        console.log("L'image est invalide");
                    }
                };

                fileReader.readAsArrayBuffer(blob);
            } else {
                console.log("L'image doit avoir une taille de 3 Mo maximum'");
            }
        }
    }

    function submitParameters(event) {
        event.preventDefault();
    }

    return (
        <div className="form-parameters-card">
            <h2>Modification des informations</h2>
            <form onSubmit={submitParameters}>
                <ContentInput type='text' label='Nom' onChange={onChangeName} value={parameters.name} />
                <ContentInput type='text' label='Prénom' onChange={onChangeFirstname} value={parameters.firstname} />
                <ContentInput type='email' label='Email' onChange={onChangeEmail} value={parameters.email} />
                <ContentInput type='text' label='Contact' onChange={onChangeContact} value={parameters.contact} />
                <ContentInput type="file" label="Téléchargement du KBIS" id="input-file" accept="image/*" name="profile-pic" onChange={onImageChange} />
                <ContentInput type='text' label='Url confirmation' onChange={onChangeConfirmation} value={parameters.confirmation} />
                <ContentInput type='text' label='Url annulation' onChange={onChangeAnnulation} value={parameters.annulation} />
                <ContentInput type='text' label='Clé publique' onChange={onChangePublic} value={credential.publicKey} />
                <ContentInput type='text' label='Clé secret' onChange={onChangeSecret} value={credential.secret} />
                <ContentInput type='number' label='Remboursement sur les produits' onChange={onChangeRefund} value={parameters.refund} />
                <input className="button-modifier" type="submit" value="Modifier" />
            </form>
        </div>
    )
}


export default FormParameters;